"use client";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export default function BoardList({ orgId, query }: BoardListProps) {
  const data = []; //todo: fetch data

  if (!data?.length && query.search) {
    return <div>No boards found for {query.search}</div>;
  }

  if (!data?.length && query.favorites) {
    return <div>No favorite boards found</div>;
  }

  if (!data?.length) {
    return <div>No boards found</div>;
  }

  return <div>{JSON.stringify(query)}</div>;
}
