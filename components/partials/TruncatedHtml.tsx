import React from "react";

export default function TruncatedHtml({ content, maxLength }: any) {
   if (content.length <= maxLength) {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
   }

   const truncatedContent = content.substring(0, maxLength) + "...";
   return <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />;
}
