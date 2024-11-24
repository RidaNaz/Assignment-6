export default function Achievements() {
    return (
      <div id="achievement" className="w-full flex items-center justify-center bg-white py-12">
        <div className="p-6 max-w-8xl w-full">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black pb-6">Our Achievements</h1>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
  
          {/* Statistics Section */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-bold text-black">+200</p>
              <p className="text-black">Courses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black">50K</p>
              <p className="text-black">Mentors</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black">370k</p>
              <p className="text-black">Students</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black">100+</p>
              <p className="text-black">Recognition</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  