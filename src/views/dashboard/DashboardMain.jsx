"use client";
import tutorImage from "@/assets/images/tutor.png";
// import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@heroui/react";
import Image from "next/image";
import BookingCard from "./BookingCard";
import EarningChartWrapper from "./EarningChartWrapper";
import PaymentCard from "./PaymentCard";
import StatsCard from "./StatsCard";
import TutorAlert from "./TutorAlert";

const DashboardMain = () => {
  const { user } = useAuth();

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8 w-full">
        {!user?.tutorId && (
          <TutorAlert />
        )}

        <div className="mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between w-full rounded-md">
          <div className="p-5">
            <h3 className="text-4xl text-white font-semibold">Share Your Knowledge with the World</h3>
            <p className="text-white/90 mt-2">Create and publish your own online courses to inspire and teach students globally.</p>

            <Button className="mt-4 bg-white text-brand font-medium shadow-small hover:bg-white/90">
              Start Teaching
            </Button>
          </div>
          <div>
            <div className="relative w-[220px] h-auto -mt-12 mr-14">
              <Image
                src={tutorImage}
                alt="TutorCrunch"
                width={220}
                height={0}
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>

        <EarningChartWrapper />
      </div>

      <div className="col-span-4">
        <Card className={"p-4"}>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-brand rounded"></div>
            <h4 className="font-medium text-base">Upcoming Bookings</h4>
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
          </div>
        </Card>

        <Card className={"p-4 mt-5"}>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-brand rounded"></div>
            <h4 className="font-medium text-base">Recent Payments</h4>
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <PaymentCard />
            <PaymentCard />
            <PaymentCard />
            <PaymentCard />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardMain;