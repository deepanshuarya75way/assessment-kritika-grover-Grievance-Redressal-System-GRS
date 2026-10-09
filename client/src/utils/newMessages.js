export const hasNewMessage = (complaint, viewerRole) =>{
  const messages = complaint?.messages || [];
  if (!messages.length) return false;

  const latest = messages.reduce((a,b) => {
 return new Date(a.createdAt)>= new Date(b.createdAt) ? a:b;
});
  const latestRole = latest.senderRole;
  if (!latestRole|| latestRole === viewerRole){ return false;}
  const viewedAt = complaint?.lastViewed?.[viewerRole];
  if(!viewedAt) return true;
  return new Date(latest.createdAt)> new Date(viewedAt);
};
