import React from "react";
import { Star } from "lucide-react";

function TeamMemberCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group">
      <div className="p-6 text-center">
        <div className="relative inline-block mb-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto border-4 border-gray-100 group-hover:border-pink-100 transition"
          />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <Star className="w-5 h-5 text-white" />
          </div>
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-1">{member.name}</h3>
        <p className="text-pink-600 font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm">{member.description}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
