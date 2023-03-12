import React, { Component } from 'react';
const Footer = () =>  {
        return (
            <footer class="bg-white p-4 flex justify-between">
                <p className='pl-12'>© Copyright Irembo 2023 All rights reserved</p>
                <p className='text-blue-600 flex gap-3 text-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>
Support Center</p>
<p>Follow us on</p>
<p>Terms of Use</p>
<p className='pr-20'>System Status</p>
            </footer>
        );
}

export default Footer;