// api/dispatch.js
import { Octokit } from "@octokit/core";

export default async function handler(req, res) {
  const { judul, konten } = req.body;
  const octokit = new Octokit({ auth: process.env.GH_PAT });

  await octokit.request(
    "POST /repos/{owner}/{repo}/actions/workflows/save-naskah.yml/dispatches",
    {
      owner: "YOUR_USERNAME",
      repo: "jurnal-layout",
      workflow_id: "save-naskah.yml",
      ref: "main",
      inputs: { judul, konten }
    }
  );
  res.status(200).json({ status: "ok" });
}
