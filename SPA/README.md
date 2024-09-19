1. **Creating a New Commit History:**


   ```bash
   git checkout --orphan new-branch
   git add .
   git commit -m "init(github_static_page): spa"
   ```

2. **Force Pushing to Overwrite History:**


   ```bash
   git branch -M main  # Rename new-branch to main
   git push -f origin main  # Force push to overwrite history
   ```

3. **Optional: Delete Old Branches:**

   ```bash
   git push origin --delete <branch-name>
   ```

CI/CD with Actions

   ```bash
   cd automateDeploy
   node automateDeploy.js
   ```