const findFavouriteLanguage = async (username) => {
  try {
    let response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    let repoNames = await response.json();
    const names = {};
    repoNames.forEach((repo) => {
      if (repo.language === null) {
      } else if (names[repo.language]) {
        names[repo.language]++;
      } else {
        names[repo.language] = 1;
      }
    });
    let max;
    Object.entries(names).forEach(([key, value]) => {
      if (!max || value > max[1]) {
        max = [key, value];
      }
    });
    return max;
  } catch (error) {
    console.error(error);
  }
};

export default findFavouriteLanguage;
