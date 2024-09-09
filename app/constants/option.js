import DashboardIcon from "@Icons/dashboard-icon.svg";
import WorkOrderIcon from "@Icons/wordorder-icon.svg";
import InventiryIcon from "@Icons/inventory-icon.svg";
import HealthcareIcon from "@Icons/healthcare-icon.svg";
import TasklistIcon from "@Icons/tasklist-icon.svg";
import CollectionIcon from "@Icons/collection-icon.svg";
import MyHrIcon from "@Icons/myhr-icon.svg";
import HomeIcon from "@Icons/home-icon.svg";
import OfficeIcon from "@Icons/office-icon.svg"

export const sideBarItems = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
    styles:
      "flex items-center text-[12px] gap-2.5 rounded-sm py-2 font-[700] dark:hover:bg-white",
  },
  {
    name: "Work Orders",
    icon: WorkOrderIcon,
    path: "/work-order",
    styles:
      "flex items-center text-[12px] gap-2.5 rounded-sm py-2 font-[700] dark:hover:bg-white",
  },
  {
    name: "Task List",
    icon: TasklistIcon,
    path: "/task-list",
    styles:
      "flex items-center text-[12px] gap-2.5 rounded-sm py-2 font-[700] dark:hover:bg-white",
  },
  {
    name: "Inventory",
    icon: InventiryIcon,
    path: "/inventory",
    styles:
      "flex items-center text-[12px] gap-2.5 rounded-sm py-2 font-[700] dark:hover:bg-white",
  },
  {
    name: "Health Care Workers",
    icon: HealthcareIcon,
    path: "/health-care",
    styles:
      "flex items-center text-[12px] gap-2.5 rounded-sm py-2 font-[700] dark:hover:bg-white",
  },
  // {
  //   name: "Collections",
  //   icon: CollectionIcon,
  //   path: "/collections",
  //   styles:
  //     "flex items-center text-[12px] gap-2.5 rounded-sm py-2 font-[700] dark:hover:bg-white",
  // },
  // {
  //   name: "My HR",
  //   icon: MyHrIcon,
  //   path: "/my-hr",
  //   styles:
  //     "flex items-center text-[12px] gap-2.5 rounded-sm py-2 font-[700] dark:hover:bg-white",
  // },
];

export const workOrderdropdwonData = [
  { id: 1, title: "Today", options: ["Today", "Tomorrow"] },
  { id: 2, title: "Tests", options: ["Tests"] },
  { id: 3, title: "Location", options: ["Delhi", "Gurugram"] },
  // { id: 4, title: "IPD", options: ["IUD", "OPD"] },
  // { id: 5, title: "Priority:High", options: ["High", "Low", "Moderate"] },
];

export const workOrderList = [
  {
    id: 1,
    name: "Janet Whiteman",
    treatment: "IPD",
    address: "New Delhi",
    priority: "High",
    image: "",
    prescription: "",
    workorder: [
      {
        id: 1,
        name: "Jack Blackman",
        role: "runner",
        image: "jack",
        rating: "",
        type: "Drugs",
        priority: "green",
        status: "success",
        assigned:true
      },
      {
        id: 2,
        name: "Jack Blackman",
        role: "Phlebotomist",
        image: "jack",
        rating: "",
        type: "Blood Test",
        priority: "red",
        status: "processing",
        assigned:true
      },
      {
        id: 3,
        name: "Mary Seacole",
        role: "Nurse",
        image: "mary",
        rating: "",
        type: "Injectables",
        priority: "green",
        status: "success",
        assigned:true
      },
    ],
  },
  {
    id: 1,
    name: "Janet Whiteman",
    treatment: "IPD",
    address: "New Delhi",
    priority: "High",
    image: "janet",
    prescription: "",
    workorder: [
      {
        id: 1,
        name: "",
        role: "",
        image: "",
        rating: "",
        type: "Drugs",
        priority: "",
        status: "pending",
        assigned:false
      },
      {
        id: 2,
        name: "",
        role: "",
        image: "",
        rating: "",
        type: "Blood Test",
        priority: "",
        status: "pending",
        assigned:false
      }
    ],
  },
];

export const addressTypeOption = [
  {id:1, title:"Home", icon: HomeIcon},
  {id:2, title:"Office", icon: OfficeIcon},
]
