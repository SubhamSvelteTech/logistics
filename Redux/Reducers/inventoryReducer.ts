import { current, PayloadAction } from "@reduxjs/toolkit";

export const inventoryReducer = {
  isInventory: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;
    return {
      ...state,
      getInventory: payload,
    };
  },

  setInventoryData: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;
    return {
      ...state,
      data: payload,
    };
  },

  setAssignPartner: (state: any, action: PayloadAction<any>) => {
    const { inner_id, row_id, assignedQuantity, isChecked, type } = action.payload;
    const prevState = current(state);

    console.log(
      inner_id,
      row_id,
      assignedQuantity,
      isChecked,
      type,
      "inner_id, row_id, value, isChecked, type"
    );

    // return {
    //   ...state,
    //   data: prevState?.data?.map((item: any) =>
    //     item?._id === row_id
    //       ? {
    //           ...item,
    //           innerRightData: item?.innerRightData?.map((innerItm: any) =>
    //             innerItm?._id === inner_id
    //               ? type === "SET_VALUE" ?   {
    //                   ...innerItm,
    //                   value,
    //                 } : type === "SET_ISCHECKED"

    //                  ? {
    //                   ...innerItm,
    //                   isChecked,
    //                 }

    //               : { ...innerItm }
    //           ),
    //         }
    //       : { ...item }
    //   ),
    // };

    return {
      ...state,
      data: prevState?.data?.map((item: any) => {
        if (item?._id === row_id) {
          return {
            ...item,
            innerRightData: item?.innerRightData?.map((innerItm: any) => {
              if (innerItm?._id === inner_id) {
                switch (type) {
                  case "SET_VALUE":
                    return { ...innerItm, assignedQuantity };
                  case "SET_ISCHECKED":
                    return { ...innerItm, isChecked };
                  default:
                    return innerItm;
                }
              }
              return { ...innerItm, isChecked: false };
            }),
          };
        }
        return item;
      }),
    };
  },

  // checkedAssignPartner: (state: any, action: PayloadAction<any>) => {
  //   const { inner_id, row_id, isChecked } = action.payload;
  //   const prevState = current(state);

  //   return {
  //     ...state,
  //     data: prevState?.data?.map((item: any) =>
  //       item?._id === row_id
  //         ? {
  //             ...item,
  //             innerRightData: item?.innerRightData?.map((innerItm: any) =>
  //               innerItm?._id === inner_id && isChecked
  //                 ? {
  //                     ...innerItm,
  //                     isChecked,
  //                   }
  //                 : { ...innerItm, isChecked: false }
  //             ),
  //           }
  //         : { ...item }
  //     ),
  //   };
  // },
};
