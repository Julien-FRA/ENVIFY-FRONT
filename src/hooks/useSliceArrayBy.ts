const useSliceArrayBy =
  <T>(limit: number) =>
  (arr: T[] | undefined): T[] => {
    return arr?.slice(0, limit) || [];
  };
export default useSliceArrayBy;
