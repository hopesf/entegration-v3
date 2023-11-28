// Function to sort the selected value to the top

const createQueryString = (name: string, value: string, searchParams: any) => {
  const params = new URLSearchParams(searchParams);
  params.set(name, value);
  return params.toString();
};

const updateFilterData = (filterData: any, selectedValue: string) => {
  const updatedFilterData = { ...filterData };
  const selectedFilter = updatedFilterData[selectedValue];
  const selectedFilterValue = selectedFilter.find((item: any) => item.checked);
  if (selectedFilterValue) {
    selectedFilterValue.checked = false;
  }
  return updatedFilterData;
};

const FilterSideFnc = {
  createQueryString,
  updateFilterData,
};
export default FilterSideFnc;
