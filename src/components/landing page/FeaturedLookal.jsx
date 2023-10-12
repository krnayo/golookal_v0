const people = [
    {
      name: 'Ralph Ian Amoyan',
      role: 'Photography & Video/Editing',
      taskStatus: '159',
      reviews: '98% Positive',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

    {
      name: 'Karen Mae Ayo',
      role: 'Photography & Video/Editing',
      taskStatus: '159',
      reviews: '98% Positive',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

    {
      name: 'Raymond Jove',
      role: 'Photography & Video/Editing',
      taskStatus: '159',
      reviews: '98% Positive',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
  
  export default function FeaturedLookal() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Lookal</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover the best local services with our handpicked providers. Quality, convenience, and trust – all at your fingertips. Elevate your local experience today!
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      {/* Add the badge here */}
                      <span className="bg-indigo-500 text-white rounded-full px-2 py-1 text-xs ml-2">
                        Badge
                      </span>
                    </div>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    <p className="text-sm font-semibold leading-6 text-black opacity-50"> Completed Tasks: {person.taskStatus}</p>
                    <p className="text-sm font-semibold leading-6 text-black opacity-50"> Reviews: {person.reviews}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  