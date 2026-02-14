// src/practice3.ts
interface UserProfile {
  id: number;
  username: string;
  email: string;
  isPremium: boolean;
}

type DisplayProfilePick = Pick<UserProfile, "email"|"username"> //Pick<T, ""|"">でTのプロパティを選べる

type DisplayProfileOmit = Omit<UserProfile, "id"|"isPremium"> //Omit<T, ""|"">でTのプロパティから除外するものを選択する

const display:DisplayProfilePick = {email:"@gmail.com", username:"hibichan"};
console.log(display);