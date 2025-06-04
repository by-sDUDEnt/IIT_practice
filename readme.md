# 🎓 IIT Practice Labs

A collection of practical labs for the IIT course at KPI, focusing on Git workflows, branching strategies, and collaborative development practices.

## 🛠️ Technologies Used

- **Git & GitHub**: Version control and collaboration.
- **Markdown**: Documentation and lab instructions.
- **Shell Scripting**: Automating tasks and processes.
- **Docker**: Containerization for consistent environments.
- **CI/CD Tools**: Implementing continuous integration and deployment pipelines.
- **Python**: Scripting and automation tasks.
- **Terraform**: Infrastructure as Code (IaC) for managing cloud resources.
- **Ansible**: Automation of configuration management and application deployment.

*Note: Specific technologies may vary per lab. Refer to individual lab branches for detailed information.*

## 🌿 Branching Strategy

- **Main Branch (`main`)**: Serves as the stable base; avoid direct commits.
- **Lab Branches (`labX`)**: Dedicated branches for each lab assignment.
- **Development Branches (`labX-feature`)**: Feature-specific branches derived from lab branches for individual tasks or experiments.

### 🔄 Workflow

1. **Clone the Repository**

   ```bash
   git clone https://github.com/by-sDUDEnt/IIT_practice.git
   cd IIT_practice
   ```

2. **Checkout the Relevant Lab Branch**

   ```bash
   git checkout labX
   ```

3. **Create a Feature Branch**

   ```bash
   git checkout -b labX-feature
   ```

4. **Make Changes and Commit**

   ```bash
   git add .
   git commit -m "Describe your changes"
   ```

5. **Push Feature Branch to Remote**

   ```bash
   git push origin labX-feature
   ```

6. **Create a Pull Request**

   - Navigate to the repository on GitHub.
   - Open a Pull Request from `labX-feature` to `labX`.
   - Request reviews and address any feedback.

7. **Merge After Approval**

   - Once approved, merge the Pull Request.
   - Delete the feature branch if it's no longer needed.

## 📚 Lab Descriptions

- **Lab 1**: Introduction to Git and basic commands.
- **Lab 2**: Exploring branching and merging.
- **Lab 3**: Collaborating using Pull Requests.
- **Lab 4**: Resolving merge conflicts.
- **Lab 5**: Advanced Git workflows.
- **Lab 6**: Integrating Git with CI/CD pipelines.

*Note: Detailed instructions and objectives for each lab are provided within their respective branches.*

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).


