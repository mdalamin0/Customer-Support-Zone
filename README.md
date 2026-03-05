1. What is JSX, and why is it used?
JSX হলো JavaScript XML. JSX জাভাস্ক্রিপ্টের এমন একটি সিনট্যাক্স যা আমাদের জাভাস্ক্রিপ্টের ভেতর Html এর মতো করে কোড লেখার সুযোগ দেয় যা দেখতে Html এর মতো হলেও আসলে Html না, React এটাকে জাভাস্ক্রিপ্টে কনভার্ট করে দেয়। 
JSX ব্যাবহার করা হয় কারণ এতে আমরা সহজেই Html এর  মতো করে কোড লিখতে পারি এবং সহজে বুঝা যায়, সহজে Maintain করা যায়।

2. What is the difference between State and Props?
State হলো ডাটা স্টোর করে রাখার উপায়। যেখানে ডাটা সময়ের সাথে সাথে পরিবর্তন হলে কম্পোনেন্ট অটোমেটিক  Re-render হয় এবং আপডেটেড ডাটা দেখায়। 
Props হলো parent থেকে child এ ডাটা পাঠানো একটি উপায়। যেমন আমরা paren components এর কোন ডাটা child component props আকারে পাঠিয়ে সেখানে use করতে পারি।  Props Unidirectional শুধু parent থেকে child এ ডাটা পাঠানো যায়।

3. What is the useState hook, and how does it work?
UseState হলো React এর একটি Hook যা তার ভিতর ডাটা স্টোর করে রাখতে পারে এবং ডাটা বা স্টেট পরিবর্তন হলে কম্পোনেন্ট কে রি রেন্ডার করে UI আপডেট করে। এটি Functional component এ স্টেটকে ডাইনামিক ভাবে ম্যানেজ করার জন্য ব্যাবহার করা হয়। 
UseState একটা initial value নেয় এবং পরবর্তীতে কোন event ঘটলে সে অনুযায়ী ডাটা নিয়ে পরিবর্তন করে এবং Ui আপডেট করে।

4. How can you share state between components in React? 
React এ State সাধারণ Parent কম্পোনেন্ট এ রাখা হয় এবং সেখান থেকে child  কম্পোনেন্ট এ Props এর মাধ্যমে শেয়ার করা হয়। এতে স্টেট ম্যানেজ করা সুবিধা হয়।

5. How is event handling done in React?
React এ event handling function  সাধারণত parent কম্পোনেন্ট এ করা হয় যেখানে স্টেট থাকে,,সেখান থেকে props আকারে পাঠিয়ে child কম্পোনেন্ট থেকে handler function কে কল করে সেখান থেকে ডাটা পাঠিয়ে স্টেট আপডেট করে দেওয়া হয়।