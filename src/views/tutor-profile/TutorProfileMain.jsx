"use client";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/card";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { tutorProfileBreadTree } from "@/helpers/breadCrumbs";
import { BiPaperPlane, BiSolidEdit } from "react-icons/bi";
import avatar from "@/assets/images/placeholder.png";
import Image from "next/image";
import { LuContactRound, LuMap } from "react-icons/lu";
import { MdOutlineCall, MdOutlinePinDrop } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { TbClockHour4 } from "react-icons/tb";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { useState } from "react";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { FaMobileRetro } from "react-icons/fa6";

const TutorProfileMain = () => {
  const data = {};

  const [isEditing, setIsEditing] = useState(false);

  const defaultValues = {
    "first_name": "Billy",
    "last_name": "Bob",
    "email": "billy_bodfddgadfdf888fdb@example.com",
    "mobile": "07123456789",
    "phone": "02081234567",
    "street": "177 South Lambeth Road",
    "state": null,
    "town": "London",
    "country": 183,
    "postcode": "SW8 1XP",
    "timezone": "Europe/London",
    "status": "approved",
    "change_via_branch": true,
    "default_rate": 80.0,
    "receive_service_notifications": true,
    "calendar_colour": "LimeGreen",
    "extra_attrs": {
      "user_dob": "1993-06-23"
    },
    "send_emails": true
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    defaultValues
  });

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <BreadcrumbsComponent breadTree={tutorProfileBreadTree} />

        {!isEditing && (
          <PrimaryButton onPress={() => setIsEditing(true)} startContent={<BiSolidEdit size={18} />} color="primary">
            Edit Profile
          </PrimaryButton>
        )}
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-3">
          <Card className="p-5">
            <div className="w-32 h-32 relative overflow-hidden rounded-md">
              <Image
                src={avatar}
                alt="Tutor Avatar"
                fill
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              {isEditing ? (
                <div>
                  <div className="my-2">
                    <Label>First Name</Label>
                    <Input
                      {...register("first_name")}
                      placeholder="Enter full name"
                      className={errors.first_name ? "border-red-500" : ""}
                    />
                  </div>

                  <div className="my-2">
                    <Label>Last Name</Label>
                    <Input
                      {...register("first_name")}
                      placeholder="Enter full name"
                      className={errors.first_name ? "border-red-500" : ""}
                    />
                  </div>
                </div>
              ) : (
                <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              )}


              <p className="text-gray-500">Mathematics Tutor</p>
              {data?.title && <p className="text-gray-500">Tutor Title</p>}
            </div>
          </Card>

          <Card className="mt-5 p-5">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <LuContactRound size={18} />
              Contact Information
            </h4>

            <div>
              <p className="flex items-center gap-2 my-1">
                <BiPaperPlane size={18} className="flex-shrink-0" />
                {isEditing ? (
                  <Input
                    {...register("email")}
                    placeholder="Enter email address"
                    className={errors.email ? "border-red-500" : ""}
                  />
                ) : (
                  <span className="line-clamp-1">james_higgins@example.com</span>
                )}

              </p>

              <p className="flex items-center gap-2 my-1">
                <FaMobileRetro size={18} className="flex-shrink-0" />
                {isEditing ? (
                  <Input
                    {...register("mobile")}
                    placeholder="Enter mobile number"
                    className={errors.mobile ? "border-red-500" : ""}
                  />
                ) : (
                  <span>07842 485 204</span>
                )}
              </p>

              {isEditing ? (
                <p className="flex items-center gap-2 my-1">
                  <MdOutlineCall size={18} className="flex-shrink-0" />
                  <Input
                    {...register("phone")}
                    placeholder="Enter phone number"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                </p>
              ) : (
                data?.phone && (
                  <p className="flex items-center gap-2 my-1">
                    <MdOutlineCall size={18} className="flex-shrink-0" />
                    <span>07842 485 204</span>
                  </p>
                )
              )}

              <p className="flex items-center gap-2 my-1">
                <MdOutlinePinDrop size={18} className="flex-shrink-0" />
                {isEditing ? (
                  <div>
                    <div>
                      <Label>Street</Label>
                      <Input
                        {...register("street")}
                        placeholder="Enter street address"
                        className={errors.street ? "border-red-500" : ""}
                      />
                    </div>

                    <div>
                      <Label>State</Label>
                      <Input
                        {...register("state")}
                        placeholder="Enter street address"
                        className={errors.state ? "border-red-500" : ""}
                      />
                    </div>

                    <div>
                      <Label>Town</Label>
                      <Input
                        {...register("town")}
                        placeholder="Enter street address"
                        className={errors.town ? "border-red-500" : ""}
                      />
                    </div>

                    <div>
                      <Label>Post Code</Label>
                      <Input
                        {...register("postcode")}
                        placeholder="Enter postcode"
                        className={errors.postcode ? "border-red-500" : ""}
                      />
                    </div>
                  </div>
                ) : (
                  <span>Royal Lane, London </span>
                )}
              </p>

              <p className="flex items-center gap-2 my-1">
                <LuMap size={18} className="flex-shrink-0" />
                {isEditing ? (
                  <div>
                    <Label>Country</Label>
                    <Input
                      {...register("country")}
                      placeholder="Enter country"
                      className={errors.country ? "border-red-500" : ""}
                    />
                  </div>
                ) : (
                  <span>United Kingdom (GB)</span>
                )}
              </p>
            </div>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Card className={"p-5"}>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <GiSkills size={18} />
              Skills
            </h4>

            <div className="flex items-center gap-2 my-2">
              <Input className="flex-1" />
              <PrimaryButton>Add To List</PrimaryButton>
            </div>

            <div className="bg-slate-100 border-slate-200 rounded-md p-5">
              skills list
            </div>
          </Card>

          <Card className={"p-5 mt-5"}>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <RiMoneyDollarBoxLine size={18} />
              Teaching Rates
            </h4>

            <p className="flex items-center gap-2 my-1">
              <TbClockHour4 size={18} className="flex-shrink-0" />
              <span className="font-semibold">
                {isEditing ? (
                  <Input
                    {...register("default_rate")}
                    placeholder="Enter hourly rate"
                    className={errors.default_rate ? "border-red-500" : ""}
                  />
                ) : "£80"}
              </span>{" "}<span>/hour</span>
            </p>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <Card className={"p-5"}>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <LiaHourglassStartSolid size={18} />
              Unsaved Changes
            </h4>

            <PrimaryButton onPress={()=> setIsEditing(false)} fullWidth>
              {isEditing ? "Update Profile" : "Save Changes"}
            </PrimaryButton>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TutorProfileMain;