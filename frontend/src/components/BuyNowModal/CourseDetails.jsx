import React from "react";
import { Star, Users, Clock, Calendar } from "lucide-react";

function CourseDetails({ course }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <span className="text-gray-700">
            <span className="font-semibold">{course.rating}</span> rating
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-500" />
          <span className="text-gray-700">
            <span className="font-semibold">{course.students.toLocaleString()}</span> students
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-500" />
          <span className="text-gray-700">
            <span className="font-semibold">{course.duration}</span> total length
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-green-500" />
          <span className="text-gray-700">Lifetime access</span>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
