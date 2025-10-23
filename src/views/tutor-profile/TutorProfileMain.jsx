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
import { useEffect, useMemo, useState } from "react";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { FaMobileRetro } from "react-icons/fa6";
import { useCreateTutor, useGetTutorProfile } from "@/api/tutors/tutors.hooks";
import { showToaster } from "@/helpers/useToaster";
import { handleErrorMessage } from "@/helpers/handleErrorMessage";
import TimezoneSelect from "react-timezone-select"
import { Checkbox } from "@heroui/react";
import { useGetCountries } from "@/api/utils/utils.hooks";
import Select from "react-select";
import { useAuth } from "@/hooks/useAuth";
import ProfileSkeleton from "@/components/loaderSeketons/ProfileSkeleton";

const TutorProfileMain = () => {
  const data = {};
  const { user } = useAuth();

  const [isEditing, setIsEditing] = useState(false);

  const defaultValues = useMemo(() => ({
    "first_name": "",
    "last_name": "",
    "title": "",
    "email": "",
    "mobile": "",
    "phone": "",
    "street": "",
    "state": null,
    "town": "",
    "country": null,
    "postcode": "",
    "timezone": "America/Dawson",
    "change_via_branch": true,
    "default_rate": 0,
    "receive_service_notifications": true,
    "calendar_colour": "LimeGreen",
    "send_emails": true
  }), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
    getValues
  } = useForm({
    defaultValues
  });

  const { data: countries, isPending: isLoadingCountries } = useGetCountries();

  const { mutateAsync: createProfile, isPending } = useCreateTutor();
  const { data: tutorProfile, isPending: isLoadingProfile } = useGetTutorProfile(user?.tutorId);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  );

  const onSubmit = async (formData) => {
    delete formData.extra_attrs;

    try {
      const res = await createProfile(formData);
      if (res?.success) {
        setIsEditing(false);
        showToaster("success", res?.message || "Profile created successfully");
      };
    } catch (error) {
      showToaster("error", handleErrorMessage(error) || "Failed to create profile");
    }
  };

  useEffect(() => {
    if (defaultValues) {
      setSelectedTimezone(defaultValues.timezone);

      const tutorCountry = countries?.data?.find(country => country.name === tutorProfile?.result?.country.split(" ")[0])
      setSelectedCountry({
        value: tutorCountry?.id,
        label: tutorCountry?.name
      });
      console.log({tutorCountry})
    }
  }, [defaultValues]);

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <BreadcrumbsComponent breadTree={tutorProfileBreadTree} />

        {!isEditing && (
          <PrimaryButton
            onPress={() => {
              setIsEditing(true);
              reset(tutorProfile?.result);
            }}
            startContent={<BiSolidEdit size={18} />}
            color="primary"
          >
            Edit Profile
          </PrimaryButton>
        )}
      </div>

      {isLoadingProfile ? <ProfileSkeleton /> : (
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-3">
            <Card className="p-5">
              <div className="w-32 h-32 relative overflow-hidden rounded-md">
                <Image
                  src={tutorProfile?.result?.photo || avatar}
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
                        placeholder="Enter first name"
                        className={errors.first_name ? "border-red-500" : ""}
                      />
                    </div>

                    <div className="my-2">
                      <Label>Last Name</Label>
                      <Input
                        {...register("last_name")}
                        placeholder="Enter last name"
                        className={errors.last_name ? "border-red-500" : ""}
                      />
                    </div>
                  </div>
                ) : (
                  <h3 className="text-xl font-semibold mt-4">
                    {tutorProfile?.result?.first_name} {tutorProfile?.result?.last_name}
                  </h3>
                )}


                {tutorProfile?.result?.title ? (
                  <p className="text-gray-500 mt-2">{tutorProfile?.result?.title}</p>
                ) : (
                  isEditing && (
                    <div>
                      <Label>Bio</Label>
                      <Input
                        {...register("title")}
                        placeholder="Enter bio"
                        className={errors.title ? "border-red-500" : ""}
                      />
                    </div>
                  )
                )}
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

                <div className="flex items-center gap-2 my-1">
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
                    <span>{tutorProfile?.result?.street}, {tutorProfile?.result?.town}, {tutorProfile?.result?.state}, {tutorProfile?.result?.postcode}</span>
                  )}
                </div>

                <div className="flex items-center gap-2 my-1">
                  <LuMap size={18} className="flex-shrink-0" />
                  {isEditing ? (
                    <div className="w-full">
                      <Label>Country</Label>
                      {countries &&
                        <Select
                          options={countries?.data?.map(country => ({
                            value: country.id,
                            label: country?.name
                          }))}
                          onChange={(option) => {
                            setValue("country", option.value);
                          }}
                          value={selectedCountry}
                          className={errors.country ? "border-red-500" : ""}
                          isLoading={isLoadingCountries}
                          menuPlacement="auto"
                        />}
                    </div>
                  ) : (
                    <span>United Kingdom (GB)</span>
                  )}
                </div>
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
                  ) : "0"}
                </span>{" "}<span>/hour</span>
              </p>
            </Card>

            <Card className={"p-5 mt-5"}>
              <div>
                <Label>Select Timezone</Label>
                <TimezoneSelect
                  value={selectedTimezone}
                  onChange={(tz) => {
                    setSelectedTimezone(tz);
                    setValue("timezone", tz.value);
                    console.log("selected timezone", tz);
                  }}
                  menuPortalTarget={document.body}
                  styles={{
                    menuPortal: base => ({ ...base, zIndex: 9999 }),
                    menu: base => ({ ...base, zIndex: 9999 }),
                  }}
                />
              </div>
              <div className="my-2 mt-5">
                <Checkbox defaultSelected>Recieve Service Notifications</Checkbox>
              </div>
              <div className="my-2">
                <Checkbox defaultSelected>Send Emails</Checkbox>
              </div>
              <div className="my-2">
                <Checkbox defaultSelected>Change Via Branch</Checkbox>
              </div>
            </Card>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <Card className={"p-5"}>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <LiaHourglassStartSolid size={18} />
                Unsaved Changes
              </h4>

              <PrimaryButton isDisabled={!isEditing} isLoading={isPending} onPress={handleSubmit(onSubmit)} fullWidth>
                {isEditing ? "Update Profile" : "Save Changes"}
              </PrimaryButton>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default TutorProfileMain;