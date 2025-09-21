import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="my-10 flex justify-center ">
      <form className="flex items-center gap-10 flex-wrap justify-start" onSubmit={handleSubmit(data => handleFormSubmitData(data))}>
        <input
          className=" rounded-xl py-5 px-4 text-base font-semibold outline-none border "
          type="text"
          placeholder="Song name"
          {...register('name')}
        />
        <input
          className="rounded-xl py-5 px-4 text-base font-semibold outline-none border"
          type="text"
          placeholder="singer"
          {...register('singer')}
        />
        <input
          className="rounded-xl py-5 px-4 text-base font-semibold outline-none border"
          type="text"
          placeholder="image url"
          {...register('image')}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-violet-600 text-sm font-semibold text-white px-10 py-5 rounded-2xl border border-transparent hover:bg-violet-400 hover:border-purple-600 hover:scale-95 transition-all duration-300 "
        />
      </form>
    </div>
  );
}

export default Form;