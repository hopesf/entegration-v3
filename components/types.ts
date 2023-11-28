export interface FilterItem {
  title: string;
  value: string;
  checked: boolean;
}

export interface FilterGroup {
  [key: string]: FilterItem[];
}
