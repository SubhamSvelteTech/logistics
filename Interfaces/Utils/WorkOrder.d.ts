export interface Patient {
    _id: string;
    fullName: string;
    email: string;
    age: number;
    address: string;
    zipcode: number;
    city: string | null;
    state: string | null;
    country: string;
    profilePicture: string | null;
    gender: string;
    ratings: number;
    createdAt: string;
    prescriptionType: string;
    paymentStatus: string;
    mobileNumber: string | null;
    emergencyMobileNumber: string | null;
    alternativeMobileNumber: string | null;
    tasklist: Task[];
  }
interface Task {
  taskId: string;
  workType: string;
  patientId: string;
  taskStatus: string;
  taskPaymentStatus: boolean;
  notes: string | null;
  assignedDate: string | null;
  createdAt: string;
  updatedAt: string;
}
