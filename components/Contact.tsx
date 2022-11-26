import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:abdulmalikadebayo07@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} \n
    ${formData.email} \n ${formData.name}
    `;
  };
  return (
    <>
      <div className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="section-title">Contact</h3>

        <div className="flex flex-col space-y-10">
          <h4 className="text-xl md:text-3xl font-semibold text-center">
            I have got just what you need, <span className="underline decoration-red-500/50">Lets Talk</span>
          </h4>

          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-red-500 h-7 w-7 animate-pulse" />
              <a href="tel:+2349039561875" className="text-lg md:text-2xl">
                +2349039561875
              </a>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-red-500 h-7 w-7 animate-pulse" />
              <a href="mailto:abdulmalikadebayo07@gmail.com" className="text-lg md:text-2xl">
                abdulmalikadebayo07@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center space-x-5 justify-center">
              <MapPinIcon className="text-red-500 h-7 w-7 animate-pulse" />
              <a href="https://goo.gl/maps/9zVpxKucypJ3t7d3A" target="_blank" className="text-lg md:text-2xl">
                28 Adeyeri Cres, Ifako-Ijaiye 101232, Lagos Nigeria.
              </a>
            </div>
          </div>

          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input {...register('name')} placeholder="Name" type="text" name="name" className="contactInput" />
              <input {...register('email')} placeholder="Email" type="email" name="email" className="contactInput" />
            </div>

            <input {...register('subject')} placeholder="Subject" type="text" className="contactInput" />
            <textarea
              {...register('message')}
              placeholder="Message"
              name="message"
              id=""
              cols={25}
              rows={4}
              className="contactInput"
            ></textarea>
            <button type="submit" className="bg-red-500 py-5 px-10 rounded-lg text-black font-bold text-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
