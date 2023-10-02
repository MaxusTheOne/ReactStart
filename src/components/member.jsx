export default function Member({ member }) {
  return (
    <p>
      {member.firstName}, {member.lastName}, {member.email} 🎉
    </p>
  );
}
