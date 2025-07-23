import "../style/Contacts.css"
export default function Contacts() {
    return <div className="p-5 w-50 portofolio m-auto text-align-self-center">
        <h1 className="phead">conatct section</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    User Name
                </label>
                <input
                    type="Name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    User Age
                </label>
                <input
                    type="age"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input
                    type=""
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />

            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>



            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
}