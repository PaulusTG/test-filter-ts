type Course = {
  name: string,
  prices: (number | null)[]
};

type Courses = Course[];

type Ranges = (number | null)[];

// Список курсов
const COURSES: Courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
const requiredRange1: Ranges = [null, 200];
const requiredRange2: Ranges = [100, 350];
const requiredRange3: Ranges = [200, null];

const getFilteredCourses = (courses: Courses, [from, to]: Ranges): Courses => {
  const result = courses.filter(({ prices: [min, max] }) => {
    let pass = (min ?? max ?? Infinity) >= (from ?? 0);
    if (pass) {
      pass = (min ?? 0) <= (to ?? Infinity) && (max ?? 0) <= (to ?? Infinity);
    }
    return pass;
  });

  return result;
}

console.log(getFilteredCourses(COURSES, requiredRange1));
console.log(getFilteredCourses(COURSES, requiredRange2));
console.log(getFilteredCourses(COURSES, requiredRange3));
