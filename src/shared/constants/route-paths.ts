export const ROUTE_PATHS = {
  HOME: '/',
  PROBLEM_LIST: {
    _: `/problem`,
    ARRAY: `/problem/array`,
    STRING: `/problem/string`,
    NUMBER: `/problem/number`,
    MATH: `/problem/math`,
    OBJECT: `/problem/object`,
  },
  PROBLEM_DETAIL: '/problem/:id',
} as const;
