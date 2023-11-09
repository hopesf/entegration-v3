import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getUser = (id: number) => {
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher, { revalidateOnFocus: true });

  return {
    user: data,
    isLoading,
    isError: error,
  };
};

const api = {
  getUser,
};

export default api;
