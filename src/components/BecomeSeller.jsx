import React, { useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";

const BecomeSeller = () => {

   return (
    <div className=" p-8 sm:px-20 sm:py-10">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <Label htmlFor="firstName">First name</Label>
            <Input type="text" name="firstName" />
          </div>
          <div className="sm:col-span-3">
            <Label htmlFor="lastName">Last name</Label>
            <Input type="text" name="lastName" />
          </div>
          <div className="sm:col-span-4">
            <Label htmlFor="email">Email address</Label>
            <Input name="email" type="email" />
          </div>
          <div className="sm:col-span-3">
            <Label htmlFor="country">Country</Label>
            <select
              name="country"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>
          <div className="col-span-full">
            <Label htmlFor="streetAddress">Street address</Label>
            <Input type="text" name="streetAddress" />
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <Label htmlFor="city">City</Label>
            <Input type="text" name="city" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="region">State / Province</Label>
            <Input type="text" name="region" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="postalCode">ZIP / Postal code</Label>
            <Input type="text" name="postalCode" />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <Button type="submit">submit</Button>
        </div>
      </div>
    </div>
  );
};

export default BecomeSeller;
