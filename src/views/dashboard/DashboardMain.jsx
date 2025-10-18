"use client";
import tutorImage from "@/assets/images/tutor.png";
// import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import TutorAlert from "./TutorAlert";
import { Button } from "@heroui/react";

const DashboardMain = () => {
  const { user } = useAuth();

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8 w-full">
        {!user?.isTutorCreated && (
          <TutorAlert />
        )}

        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between w-full rounded-md">
          <div className="p-5">
            <h3 className="text-4xl text-white font-semibold">Share Your Knowledge with the World</h3>
            <p className="text-white/90 mt-2">Create and publish your own online courses to inspire and teach students globally.</p>

            <Button className="mt-4 bg-white text-brand font-medium shadow-small hover:bg-white/90">
              Start Teaching
            </Button>
          </div>
          <div>
            <div className="relative w-[220px] h-auto -mt-12">
              <Image
                src={tutorImage}
                alt="TutorCrunch"
                width={200}
                height={0}
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>

      </div>

      <div className="col-span-4">
        <Card></Card>
      </div>
    </div>
  );
};

export default DashboardMain;