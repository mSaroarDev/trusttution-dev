import { useCreateService } from "@/api/services/services.hooks";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { handleErrorMessage } from "@/helpers/handleErrorMessage";
import { showToaster } from "@/helpers/useToaster";
import { Alert } from "@heroui/react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select"

const NewServiceForm = ({setShowNewServiceModal}) => {
  const defaultValues = useMemo(() => {
    return {
      name: "",
      description: "",
      dft_charge_rate: null,
      dft_contractor_rate: null,
      dft_charge_type: "hourly",
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    defaultValues,
  });

  const {mutateAsync: createService, isPending} = useCreateService();
  const onSubmit = async (data) => {
    try {
      const res = await createService(data);
      if(res?.success){
        showToaster("success", res?.message || "Service created successfully");
        reset(defaultValues);
        setShowNewServiceModal(false);
      }
    } catch (error) {
      showToaster("error", handleErrorMessage(error));
    }
  };

  return (
    <>
      <Alert color="default" title={`Create a service for students to visible your brand in TrustTution`} />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-3">
        <div>
          <Label>Service Name (max 100 characters)</Label>
          <Input
            type="text"
            maxLength={100}
            {...register("name", { required: true, maxLength: 100 })}
            placeholder="Enter the service name"
            className={errors.name ? "border-red-500" : "" }
          />
        </div>

        <div>
          <Label>Default Charge Rate</Label>
          <Input
            type="number"
            {...register("dft_charge_rate", { required: true })}
            placeholder="eg: 50"
            className={errors.dft_charge_rate ? "border-red-500" : "" }
          />
        </div>

        <div>
          <Label>Default Contractor Rate</Label>
          <Input
            type="number"
            {...register("dft_contractor_rate", { required: true })}
            placeholder="eg: 30"
            className={errors.dft_contractor_rate ? "border-red-500" : "" }
          />
        </div>

        <div>
          <Label>Charge Type</Label>
          <Select
            options={[
              { value: 'hourly', label: 'Hourly' },
            ]}
            defaultValue={{ value: 'hourly', label: 'Hourly' }}
            onChange={(option)=> {
              setValue("dft_charge_type", option.value);
            }}
            className={errors.dft_charge_type ? "border-red-500" : "" }
          />
        </div>

        <div>
          <Label>Service Description (max 500 characters)</Label>
          <textarea
            className={`w-full border border-gray-300 rounded-md p-2 mt-1 hind-siliguri-regular ${errors.description ? "border-red-500" : "" }`}
            rows={4}
            maxLength={500}
            placeholder="Enter the service description"
            {...register("description", { required: true, maxLength: 500 })}
          ></textarea>
        </div>

        <PrimaryButton isLoading={isPending} type="submit" color="primary" className="mt-1">
          Create Service
        </PrimaryButton>
      </form>
    </>
  );
};

export default NewServiceForm;