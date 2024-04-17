"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  User,
  Chip,
  Tooltip,
  ChipProps,
  getKeyValue,
  Button,
} from "@nextui-org/react";
// import {EditIcon} from "./EditIcon";
// import {DeleteIcon} from "./DeleteIcon";
// import {EyeIcon} from "./EyeIcon";
// import SearchIcon from "@mui/icons-material/Search";
import { columns, users } from "./data";
import Switch from "@mui/material/Switch";
import React from "react";
import { SearchIcon } from "lucide-react";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type User = (typeof users)[0];

export default function Tables() {
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            name={cellValue}
          ></User>
        );
      case "role":
        return (
          <div className="flex flex-col items-stretch">
            <p className="text-bold text-[12px] capitalize">{cellValue}</p>
          </div>
        );
      case "last_activity":
        return (
          <div className="flex flex-col items-stretch">
            <p className="text-bold text-[12px] capitalize">{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center">
            <Switch />
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 w-1/2">
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%] bg-white rounded"
            placeholder="Search by name or email"
            startContent={<SearchIcon />}
          />
          <Button className="bg-black text-white text-[12px]">
            Create user
          </Button>
        </div>
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
