import React, { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { getAllData } from "../../api/getAllData";

const List = () => {
  // const { data } = useQuery("repository", getAllData);
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "getAllData",
    ({ pageParam = 1 }) => getAllData(pageParam),
    {
      // getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
      getNextPageParam: (lastPage, allPages) => {
        // console.log("allPages", lastPage, allPages);
        const maxPages = lastPage.data?.total_count / 30;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
      // getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
    }
  );

  useEffect(() => {
    let fetching = false;
    const onScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      //scrollHeight : 전체 height
      //scrollTop : 최상단에서부터 현재위치까지의 height
      //clientHeight : 사용자의 화면 height
      console.log(scrollHeight, scrollTop, clientHeight);
      //clientHeight의 1.5배만큼 내려왔을때 fetchNextPage 가 찍히고 fetching이 멈춘다.
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener("scroll", onScroll);
    //cleanup func.
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section>
      <ul>
        {data?.pages.map((page) => {
          return page.data.items.map((repo: any) => {
            return (
              <li key={repo.id}>
                <p>
                  <b>{repo.name}</b>
                </p>
                <p>{repo.description}</p>
              </li>
            );
          });
        })}
        {/* {data?.data?.items?.map((repo: any) => {
          return (
            <li key={repo.id}>
              <p>
                <b>{repo.name}</b>
              </p>
              <p>{repo.description}</p>
            </li>
          );
        })} */}
      </ul>
    </section>
  );
};

export default List;
