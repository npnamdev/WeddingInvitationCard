"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image";

interface DrawerDemoProps {
  data?: {
    imageUrl: string;
    name: string;
    accountNumber: string;
    bankInfo: string;
  };
}

export function DrawerDemo({ data }: DrawerDemoProps) {
  if (!data) {
    return null;
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Gửi mừng cưới</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex justify-center items-center flex-col px-7 py-8">
          <h3 className="font-Lobster text-[26px]">GỬI MỪNG CƯỚI</h3>
          <p className="text-[16px] text-gray text-center mb-3 mt-2 text-sm leading-6">
            Chúng tôi xin gửi lời cảm ơn chân thành đến bạn vì đã chia sẻ niềm vui trong ngày trọng đại của chúng tôi
          </p>
          {data.imageUrl && (
            <Image className="shadow-2xl rounded-md w-[76%]" src={data.imageUrl} width={100} height={100} alt="Invitation 3" />
          )}
          <h2 className="mt-4 font-bold">{data.name || "Không có tên"}</h2>
          <p className="text-sm mt-2 font-semibold">
            {data.accountNumber || "Chưa có số tài khoản"}
          </p>
          <p className="text-sm mt-2 font-semibold">
            {data.bankInfo || "Chưa có thông tin ngân hàng"}
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
