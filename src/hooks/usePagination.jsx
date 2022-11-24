import { useEffect, useState } from "react";

export const usePagination = (todos=[]) => {
  const [pagination, setPagination] = useState({
    start: 0,
    end: 5,
    numberPages: Math.ceil(todos.length / 5),
    currentPage: 1,
  });
  
  useEffect(() => {
    setPagination({
      ...pagination,
      numberPages: Math.ceil(todos.length / 5),
    });
  }, [todos]);

  const selectPage = (index) => {
    setPagination({
      ...pagination,
      currentPage: index + 1,
      start: index * 5,
      end: (index + 1) * 5,
    });
  };

  return [pagination, selectPage];
};
