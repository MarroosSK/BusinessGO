import React from "react";
import { Badge } from "../ui/badge";
import { Clock4 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatTime, getDayName } from "@/lib/formatDayTime";
import { BusinessHoursI } from "@/types/types";

const BusinessOpenHours = ({ openHours }: { openHours: BusinessHoursI[] }) => {
  //console.log(openHours);

  return (
    <div className="flex flex-col w-full p-8 border bg-white rounded-md h-[400px] ">
      <Badge variant="default" className="w-[150px] bg-[#ff5b31]">
        <Clock4 /> Open Hours
      </Badge>
      {!openHours ? (
        <p className="mt-[5px] text-slate-500">No open hours available</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-500">Days</TableHead>
              <TableHead className="text-slate-500">Open Hours</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {openHours &&
              openHours[0].open.map((day: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-slate-500">
                    {getDayName(day?.day)}
                  </TableCell>
                  <TableCell className="text-slate-500">
                    {formatTime(day?.start)} - {formatTime(day?.end)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default BusinessOpenHours;
