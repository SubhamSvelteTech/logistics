export interface ChartData {
    labels: string[];
    datasets: Dataset[];
    todayTotalTask: number;
  }
interface Dataset {
  label: string;
  backgroundColor: string;
  data: number[];
}
