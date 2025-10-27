import { RxCross2 } from "react-icons/rx";

const SkillsArray = ({
  skillsArray,
  handleDeleteSkill,
  isEditing
}) => {
  return (
    <>
      {skillsArray?.length < 1 ? (
        <div className="h-10 w-full grid place-items-center">
          No skills added yet.
        </div>
      ) : (skillsArray || []).map((item, index) => (
        <div key={index} className="w-fit flex items-center gap-2 bg-brand/5 text-brand border border-brand/30 rounded mb-2 text-sm shadow-sm">
          <div className={`pl-3 font-medium ${!isEditing && "pr-3 py-0.5"}`}>
            {item}
          </div>
          {isEditing && (
            <button
              className="p-1.5 bg-red-500/20 text-red-500 transition-colors duration-200 cursor-pointer"
              onClick={() => handleDeleteSkill(index)}
            >
              <RxCross2 size={14} />
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default SkillsArray;