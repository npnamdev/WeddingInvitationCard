"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import SnowEffect from "@/components/SnowEffect";
import Guestbook from "@/components/Guestbook";
import CalendarMarch from "@/components/CalendarMarch";
import { DrawerDemo } from "@/components/DrawerDemo";
import { Button } from "@/components/ui/button";
import MusicToggleButton from "@/components/MusicToggleButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function Page() {
  useEffect(() => { AOS.init(); }, []);
  useEffect(() => {
    const handleWheel = (event: any) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    const handleGesture = (event: any) => event.preventDefault();
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("gesturestart", handleGesture);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("gesturestart", handleGesture);
    };
  }, []);

  const handleOpenGoogleMaps = () => {
    const latitude = 20.758595;
    const longitude = 105.787167;
    const googleMapsWebUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const googleMapsAppUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = googleMapsAppUrl;
    } else {
      window.open(googleMapsWebUrl, "_blank");
    }
  };

  return (
    <div className="max-w-[435px] overflow-hidden">
      <MusicToggleButton />
      <ScrollToTop />
      <section className="w-full relative flex flex-col items-center justify-center z-[20] py-16 object-cover bg-[url(https://res.cloudinary.com/dpufemrnq/image/upload/v1740708261/5_pl6fxl.svg)]">
        <SnowEffect />
        <h2 className="font-extrabold text-[19px] font-playwrite">SAVE THE DATE</h2>
        <h3 className="font-bold text-[24px] font-Lobster mb-4 mt-3">Phương Nam & Hải Yến</h3>
        <div className="bg-[#f62259] w-[55%] p-2">
          <Image className="w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504936/257A6768_olhw6i.jpg" width={200} height={300} alt="Wedding" />
        </div>
        <div className="mt-4 mb-1 font-bold">09.03.2025</div>
        <p className="font-bold">(Tức ngày 10 Tháng 02 Năm Ất Tỵ)</p>
      </section>

      <section className="py-6 px-7 text-center">
        <h2 className="font-semibold text-[20px] font-Lobster mb-6">Hôn nhân là chuyện cả đời, Yêu người vừa ý, cưới người mình thương</h2>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-extrabold mb-2">NHÀ GÁI</h2>
            <p className="text-sm font-medium">ÔNG NGUYỄN DANH HÀO</p>
            <p className="text-sm font-medium mb-2">BÀ NGUYỄN THỊ PHƯƠNG</p>
            <Image className="w-[70px] mt-1 py-1" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740565927/1_dpg4io.svg" width={200} height={400} alt="Wedding" />
            <p className="font-semibold font-Lobster text-[24px] mt-3">Hải Yến</p>
          </div>
          <div className="">
            <Image className="w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505065/257A6942_re2yug.jpg" width={200} height={400} alt="Wedding" />
          </div>
          <div className="">
            <Image className="w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505075/257A6958_voyspn.jpg" width={200} height={400} alt="Wedding" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-extrabold mb-2">NHÀ TRAI</h2>
            <p className="text-sm font-medium">ÔNG NGUYỄN HỮU CẦU</p>
            <p className="text-sm font-medium mb-2">BÀ NGUYỄN THỊ KẾ</p>
            <Image className="w-[70px] mt-2" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740565926/2_ytvycn.svg" width={200} height={400} alt="Wedding" />
            <p className="font-semibold font-Lobster text-[24px] mt-3">Phương Nam</p>
          </div>
        </div>
      </section>

      <section className="py-8 text-center bg-[#f2f5f4]">
        <div className="mx-5">
          <div className="w-[100px] h-[2px] bg-black rounded mx-auto mb-1"></div>
          <h2 className=" font-medium text-[26px]  text-black font-Lobster">Thư Mời</h2>
          <p className="text-sm font-semibold mb-5">THAM DỰ LỄ CƯỚI PHƯƠNG NAM & HẢI YẾN</p>
          <div className="grid grid-cols-[auto_40%_auto] items-center gap-4 px-2 rounded">
            <Image data-aos="fade-right" data-aos-duration="1000" className="shadow-2xl rounded-md" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504985/257A7142_hg6s9k.jpg" width={250} height={300} alt="Invitation 3" />
            <Image data-aos="fade-down" data-aos-duration="1000" className="shadow-2xl rounded-md" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504936/257A6768_olhw6i.jpg" width={250} height={300} alt="Invitation 2" />
            <Image data-aos="fade-left" data-aos-duration="1000" className="shadow-2xl rounded-md" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504830/257A6816_ssfl1y.jpg" width={250} height={300} alt="Invitation 3" />
          </div>
        </div>

        <div className="mx-7 flex flex-col gap-1 justify-center items-center mt-6 rounded-tr-[40px] py-6 px-5 bg-white shadow">
          <h3 className="font-bold text-md">TIỆC MỪNG CƯỚI NHÀ TRAI</h3>
          <h4 className="font-bold font-Lobster my-1">CHỦ NHẬT</h4>
          <h3 className="font-Lobster">09 . 03 . 2025</h3>
          <p className="text-sm mb-2.5 mt-1 leading-6">Thôn Đạo Tú, Xã Quảng Phú Cầu, Huyện Ứng Hoà, Thành phố Hà Nội</p>
          <DrawerDemo data={{
            imageUrl: "https://res.cloudinary.com/dpufemrnq/image/upload/v1740736020/2_x36xql.svg",
            name: "NGUYEN PHUONG NAM",
            accountNumber: "19035514534038",
            bankInfo: "TechcomBank CN HA DONG - PGD VAN QUAN"
          }} />
          <Button className="mt-1 texxt-sm" onClick={handleOpenGoogleMaps}>Xem chỉ đường</Button>
        </div>
        <div className="mx-7 flex flex-col gap-1 justify-center items-center mt-4 rounded-bl-[40px] py-6 px-5 bg-white shadow">
          <h3 className="font-bold text-md">TIỆC MỪNG CƯỚI NHÀ GÁI</h3>
          <h4 className="font-bold font-Lobster my-1">CHỦ NHẬT</h4>
          <h3 className="font-Lobster">09 . 03 . 2025</h3>
          <p className="text-sm mb-2.5 mt-1 leading-6">Thôn Tử Dương, Xã Cao Thành, Huyện Ứng Hoà, Thành phố Hà Nội</p>
          <DrawerDemo data={{
            imageUrl: "https://res.cloudinary.com/dpufemrnq/image/upload/v1740736026/1_wjfncb.svg",
            name: "NGUYEN HAI YEN",
            accountNumber: "100870601899",
            bankInfo: "VietinBank CN DONG DA - PGD CAT LINK"
          }} />
          <Button className="mt-1 texxt-sm" onClick={handleOpenGoogleMaps}>Xem chỉ đường</Button>
        </div>
      </section>

      <CalendarMarch />

      <section className="bg-[#f2f5f4] py-8 px-6">
        <div className="w-[90%] mx-auto">
          <h2 className="text-center font-medium text-[26px] font-Lobster">Album Hình Cưới</h2>
          <p className="text-center text-[15px] mb-6 mt-2">Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.</p>
        </div>
        <div className="columns-2 gap-3 [&>*:not(:first-child)]:mt-3">
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545310/257A6643_aj4knn.jpg" width={250} height={300} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505267/257A7196_z6igdl.jpg" width={250} height={500} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545307/257A6610_senrnb.jpg" width={250} height={450} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505458/257A7238_rmrz7d.jpg" width={250} height={400} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505417/257A7203_bh9p5k.jpg" width={250} height={350} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545311/257A6705_skzcgj.jpg" width={250} height={600} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545311/257A6748_p6jdoh.jpg" width={250} height={350} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545307/257A6610_senrnb.jpg" width={250} height={450} alt="Wedding" />
        </div>
      </section>
      <Guestbook />
      <section className="bg-red-200 py-10 px-7 flex gap-2 flex-col text-white items-center justify-center text-center">
        <h2 className="font-Lobster text-[46px]">Thank You</h2>
        <p>Chúng tôi vô cùng trân trọng và biết ơn sự hiện diện của bạn trong ngày đặc biệt này!</p>
      </section>
    </div>
  );
}
