import fs from "fs/promises";

const source = "./files";
const destination = "./files_copy";

const copy = async () => {
  try {
    // Check if source exists
    await fs.access(source);

    // Manually check if destination exists
    const destExists = await fs.access(destination)
      .then(() => true)
      .catch(() => false);

    if (destExists) throw new Error("FS operation failed");

    // Copy folder
    await fs.cp(source, destination, { recursive: true });

  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
