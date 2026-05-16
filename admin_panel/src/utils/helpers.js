// =====================================
// FORMAT DATE
// =====================================
export const formatDate =
  (date) => {

    return new Date(date)
      .toLocaleString();
  };

// =====================================
// CAPITALIZE
// =====================================
export const capitalize =
  (text) => {

    if (!text) {

      return "";
    }

    return text.charAt(0)
      .toUpperCase() +

      text.slice(1);
  };

// =====================================
// SHORT ID
// =====================================
export const shortId =
  (id) => {

    return id?.slice(0, 8);
  };