import Swal from "sweetalert2";

const AddCountry = () => {
  const handleAddCountry = (e) => {
    e.preventDefault();
    const formAddCountry = e.currentTarget;
    const form = new FormData(formAddCountry);
    const country_name = form.get("country_name");
    const photo = form.get("photo");
    const description = form.get("description");
    console.log(country_name, photo, description);
    const newCountry = { country_name, photo, description };
    // addCountryToFirestore(country_name, photo);
    fetch("http://localhost:5000/countriess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCountry),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "data.message",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="dark:bg-blue-400">
      <div className=" py-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-center text-2xl font-bold text-green-300">
            Add Torists Spot{" "}
          </h1>
        </div>
        <div className="hero bg-base-200 dark:bg-blue-400">
          <div className="card w-full">
            <form
              onSubmit={handleAddCountry}
              className="card-body p-0 rounded-none"
            >
              <div className="m-4">
                <div className="flex gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text block mb-2 text-sm font-medium dark:text-white">
                        Country_Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="country_name"
                      placeholder="Enter coffee supplier"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="block mb-2 text-sm font-medium dark:text-white">Photo</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Enter photo URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control w-full">
                  <label
                    className="label"
                  >
                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Add Tourists Country"
                  className="btn btn-primary bg-[#D2B48C]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCountry;
