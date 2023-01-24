// TypeScript pseudocode for an enterprise project management use case.

// Placeholder for the Json datatype. See https://qworum.net/en/specification/v1/#json
type Json = string | number | boolean | Array<any> | {} | null; 

/* 
 * Interface for an HR service. Application available at the `home` end-point.
 */
interface IHumanResources {
  /*
   * Main interactive end-point. Never returns.
   * Absolute path within web origin: /home/
   */
  home: () => Json;

  /*
   * Interactive end-point that returns a list of employees that the end-user finalizes interactively.
   * Absolute path within web origin: /choose-employees/
   */
  chooseEmployees: (pattern: Json) => Json;
}


/* 
 * Interface for a room booking service.
 */
interface IRooms {
  /*
   * Interactive end-point for booking a room in the company buildings.
   * Absolute path within web origin: /book-room/
   */
  bookRoom: (pattern: Json) => Json;
}


interface ICollaborationSoftware { /* ... */ }


/* 
 * Interface for a project management service. Application available at the `home` end-point.
 */
interface IProjectManager {
  projects             : Json;                    // Metadata about the projects that the end-user is involved in. 

  hr                   : IHumanResources;         // Remote service for adding employees to the project.
  rooms                : IRooms;                  // Remote service for booking physical rooms.
  collaborationSoftware: ICollaborationSoftware;  // Remote online collaboration service.

  /*
   * Main interactive end-point. Never returns.
   * Absolute path within web origin: /home/
   */
  home: () => Json;
}

