import React, { useRef } from 'react';
import { useLoaderData, useNavigate, Form, useSubmit } from 'react-router-dom';
import BlackButton from '../components/BlackButton';

export default function ProductEditPage() {
  const navigate = useNavigate();
  const item = useLoaderData();
  const submit = useSubmit();

  // Use a single ref to hold form values
  const formRefs = useRef({
    title: null,
    place: null,
    price: null,
    startDate: null,
    endDate: null,
    contents: null,
  });

  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      title: formRefs.current.title.value,
      place: formRefs.current.place.value,
      price: formRefs.current.price.value,
      startDate: formRefs.current.startDate.value,
      endDate: formRefs.current.endDate.value,
      contents: formRefs.current.contents.value,
    };

    submit(formData, { method: 'post' });
  };

  if (!item) {
    return <div>Invalid Access. No ticket data available.</div>;
  }

  return (
    <div className="bg-white min-h-screen py-12 px-20">
      <h2 className="text-2xl font-semibold mb-4">Edit Ticket</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            defaultValue={item.title}
            ref={el => (formRefs.current.title = el)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="place">
            Place
          </label>
          <input
            id="place"
            type="text"
            defaultValue={item.place}
            ref={el => (formRefs.current.place = el)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            type="number"
            defaultValue={item.price}
            ref={el => (formRefs.current.price = el)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="startDate">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            defaultValue={item.startDate}
            ref={el => (formRefs.current.startDate = el)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="endDate">
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            defaultValue={item.endDate}
            ref={el => (formRefs.current.endDate = el)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="contents">
            Contents
          </label>
          <textarea
            id="contents"
            defaultValue={item.contents}
            ref={el => (formRefs.current.contents = el)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mt-6 flex justify-between">
          <BlackButton
            width="200px"
            height="40px"
            text="Cancel"
            onClick={() => navigate(-1)} // Go back to the previous page
          />
          <BlackButton
            width="200px"
            height="40px"
            text="Save Changes"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
