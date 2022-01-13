import { React } from "react";
import ProfilePictureUploader from "@Components/ProfilePictureUploader";

export default function Settings({ user }) {
  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-lg w-full shadow-lg ">
        <div class="flex justify-center mt-8">
          <ProfilePictureUploader user={user} />
        </div>
      </div>
    </div>
  );
}
