import React, { useState } from "react";
import Logo from "../assets/taskit-high-resolution-logo-color-on-transparent-background.png";
import { useNavigate } from "react-router";
import {
	loginTaskerThunk,
	registerTaskerThunk,
} from "../store/auth";
import { useSelector, useDispatch } from "react-redux";

const AuthTaskee = () => {
	const [isLogin, setIsLogin] = useState(true);
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		fName: "",
		lName: "",
		email: "",
		password: "",
		phone: "",
		city: "",
		state: "",
	});
	const dispatch = useDispatch();

	const changeLoginMode = (e) => {
		e.preventDefault();
		setIsLogin(!isLogin);
	};

	const handleFirstNameChange = (e) => {
		e.preventDefault();
		setCredentials({
			...credentials,
			fName: e.target.value,
		});
	};

	const handleLastNameChange = (e) => {
		e.preventDefault();
		setCredentials({
			...credentials,
			lName: e.target.value,
		});
	};

	const handleEmailChange = (e) => {
		e.preventDefault();
		setCredentials({
			...credentials,
			email: e.target.value,
		});
	};

	const handlePasswordChange = (e) => {
		e.preventDefault();
		setCredentials({
			...credentials,
			password: e.target.value,
		});
	};

	const handlePhoneChange = (e) => {
		e.preventDefault();
		setCredentials({
			...credentials,
			phone: e.target.value,
		});
	};

	const loginHandler = async (e) => {
		e.preventDefault();
		if (isLogin) {
			const { email, password } = credentials;
			try {
				dispatch(loginTaskerThunk({ email, password }));
				navigate("/");
			} catch (error) {
				console.error(error.message);
				throw new Error(error);
			}
		}
	};

	const registerHandler = async (e) => {
		e.preventDefault();

		if (!isLogin) {
			try {
				dispatch(registerTaskerThunk(credentials));
				navigate("/");
			} catch (error) {
				console.error(error.message);
				throw new Error(error);
			}
		}
	};

	if (!isLogin) {
		return (
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src={Logo}
						alt="Your Company"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
						Register a Taskee account now!
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						className="space-y-6"
						onSubmit={registerHandler}>
						<div>
							<label
								htmlFor="fname"
								className="block text-sm font-medium leading-6 text-gray-900 text-left">
								First Name
							</label>
							<div className="mt-2">
								<input
									id="fname"
									name="fname"
									type="text"
									autoComplete="name"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={credentials.fName}
									onChange={handleFirstNameChange}
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="lname"
								className="block text-sm font-medium leading-6 text-gray-900 text-left">
								Last Name
							</label>
							<div className="mt-2">
								<input
									id="lname"
									name="lname"
									type="text"
									autoComplete="name"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={credentials.lName}
									onChange={handleLastNameChange}
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900 text-left">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={credentials.email}
									onChange={handleEmailChange}
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="phone"
								className="block text-sm font-medium leading-6 text-gray-900 text-left">
								Phone Number
							</label>
							<div className="mt-2">
								<input
									id="phone"
									name="phone"
									type="tel"
									autoComplete="phone"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
									value={credentials.phone}
									onChange={handlePhoneChange}
								/>
							</div>
						</div>
						<div className="flex justify-center">
							<label
								htmlFor="state"
								className="blocktext-sm font-medium leading-6 text-gray-900 text-left mr-2">
								State:
							</label>
							<select
								className="border-stone-950 border-3"
								name="state"
								id="state">
								<option
									value=""
									selected="selected">
									Select a State
								</option>
								<option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">
									District Of Columbia
								</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</select>
						</div>

						<div>
							<div className="flex items-center">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={credentials.password}
									onChange={handlePasswordChange}
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-mdpx-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								style={{ backgroundColor: "#374151" }}>
								Register Now
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Already a Tasker member?
						<a
							href="#"
							className="font-semibold leading-6 mx-1 text-indigo-600 hover:text-indigo-500"
							onClick={changeLoginMode}>
							Sign In Now!
						</a>
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					className="mx-auto h-10 w-auto"
					src={Logo}
					alt="Your Company"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
					Sign in to your Taskee account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form
					className="space-y-6"
					onSubmit={loginHandler}
					// action="#"
				>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900 text-left">
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								value={credentials.email}
								onChange={handleEmailChange}
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900">
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								value={credentials.password}
								onChange={handlePasswordChange}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-mdpx-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							style={{ backgroundColor: "#374151" }}>
							Sign in
						</button>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Not a Taskee member?
					<a
						href="#"
						className="font-semibold leading-6 mx-1 text-indigo-600 hover:text-indigo-500"
						onClick={changeLoginMode}>
						Register Now!
					</a>
				</p>
			</div>
		</div>
	);
};

export default AuthTaskee;
