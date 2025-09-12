import { DynamicTable } from "@/components/DynamicTable";

// Data array of objects with all data types, numbers, strings, booleans, dates
const data = [
  {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: true,
    date: new Date(),
    wentToSchool: true,
    personality: "introverted",
  },
  {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
    isStudent: false,
    date: new Date(),
  },
  {
    name: "Jim",
    age: 35,
    city: "Chicago",
    isStudent: true,
    date: new Date(),
  },
];

const Example = () => {
  return (
    <div>
      <DynamicTable data={data} />
    </div>
  );
};

export default Example;
