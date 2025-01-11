const Team = () => {
    const teamMembers = [
      {
        name: "John Smith",
        designation: "Designation here",
        description:
          "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit et fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis malesuada.",
        image: "https://i.ibb.co/sVQZtT7/image.png",  
      },
      {
        name: "Elina Williams",
        designation: "Designation here",
        description:
          "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit et fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis malesuada.",
        image: "https://i.ibb.co/FXQtBHg/image.png",  
      },
      {
        name: "John Smith",
        designation: "Designation here",
        description:
          "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit et fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis malesuada. ",
        image: "https://i.ibb.co/YjLDNZ1/image.png", 
      },
    ];
  
    return (
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <h2 className="text-2xl font-semibold mb-4">Team</h2>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi
          integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
        </p>
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col  md:flex-row   bg-[#0084ff18] p-4 rounded-lg shadow">
              <div className="flex flex-col gap-1 items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-28 rounded-lg object-cover"
              />
               <h3 className="font-semibold text-[16px]">{member.name}</h3>
               <p className="text-xs text-gray-500">{member.designation}</p>
               </div>

              <div className="ml-4">
               
                <p className="text-sm text-gray-700 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;