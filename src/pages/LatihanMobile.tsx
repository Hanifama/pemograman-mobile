const classes = [
  {
    name: "SI",
    students: [
      { name: "Andi", img: "https://randomuser.me/api/portraits/men/1.jpg" },
      { name: "Budi", img: "https://randomuser.me/api/portraits/women/2.jpg" },
      { name: "Citra", img: "https://randomuser.me/api/portraits/men/3.jpg" },
      { name: "Dewi", img: "https://randomuser.me/api/portraits/women/4.jpg" },
      { name: "Eko", img: "https://randomuser.me/api/portraits/men/5.jpg" },
    ],
  },
  {
    name: "KA",
    students: [
      { name: "Faisal", img: "https://randomuser.me/api/portraits/women/6.jpg" },
      { name: "Gina", img: "https://randomuser.me/api/portraits/men/7.jpg" },
      { name: "Hadi", img: "https://randomuser.me/api/portraits/women/8.jpg" },
      { name: "Indra", img: "https://randomuser.me/api/portraits/men/9.jpg" },
      { name: "Joko", img: "https://randomuser.me/api/portraits/women/10.jpg" },
    ],
  },
  {
    name: "BD",
    students: [
      { name: "Karin", img: "https://randomuser.me/api/portraits/men/11.jpg" },
      { name: "Lina", img: "https://randomuser.me/api/portraits/women/12.jpg" },
      { name: "Mika", img: "https://randomuser.me/api/portraits/men/13.jpg" },
      { name: "Nina", img: "https://randomuser.me/api/portraits/women/14.jpg" },
      { name: "Oscar", img: "https://randomuser.me/api/portraits/men/15.jpg" },
    ],
  },
];

const ClassCard = ({ name, students }: { name: string; students: { name: string; img: string }[] }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg mx-auto mt-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Kelas {name}</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {students.map((student, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={student.img}
              alt={student.name}
              className="w-20 h-20 rounded-full border-4 border-gray-200 shadow-md hover:border-blue-400 hover:shadow-lg transition-all"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">{student.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const LatihanMobile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6 space-y-6">
      {classes.map((cls) => (
        <ClassCard key={cls.name} name={cls.name} students={cls.students} />
      ))}
    </div>
  );
};

export default LatihanMobile;