import React from "react";
import { Card } from "./ui/card";
import { Loader2 } from "lucide-react";

function Skeleton2() {
  return (
    <Card className="fixed inset-0 z-30 flex items-center justify-center overflow-hidden bg-black/10">
      <Loader2 className="animate-spin text-white z-40" />
    </Card>
  );
}

export default Skeleton2;
