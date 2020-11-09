var longestCommonSubsequence = function (text1, text2) {
  let len1 = text1.length
  let len2 = text2.length
  let dp = new Array(len1 + 1)
  for (let i = 0; i < len1 + 1; i++) {
    dp[i] = new Array(len2 + 1)
    dp[i].fill(0)
    for (let j = 0; j < len2 + 1; j++) {
      if (i !== 0 && j !== 0) {
        if (text1[i - 1] === text2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1
        } else {
          dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
        }
      }
    }
  }
  return dp[len1][len2]
}
console.log(longestCommonSubsequence('abc', 'def'))
