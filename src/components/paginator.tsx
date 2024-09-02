"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface PaginatorProps {
  total: number;
  perPage: number;
}

export default function Paginator({ total, perPage }: PaginatorProps) {
  const params = useSearchParams();
  const currentPage = parseInt(params?.get("page") ?? "1");
  const pageCount = Math.ceil(total / perPage);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage === 1}
            href={`?page=${currentPage - 1}`}
          />
        </PaginationItem>

        {[...Array(pageCount)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href={`?page=${index + 1}`}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            disabled={currentPage === pageCount}
            href={`?page=${currentPage + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
